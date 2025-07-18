import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Update this to match your backend fields
interface FormData {
  firstname: string;
  phone: string;
  email: string;
  company?: string;
  designation?: string;
  headcount?: string;
  message?: string;
  about_company?: string;
  curriculum: boolean;
  slug: string;
  id?: string;
  formtype?: string;
  page?: string;
  date?: string;
  course?: string;
  website?: string;
  mainBranchAddress?: string;
  otherBranches?: string;
  trainingsOffered?: string;
  demo?: boolean;
  country?: string;
  requirements?: string[]
}


interface FormState {
  formSubmitStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isFormOpen: boolean;
  id: string | null;
  curriculum: boolean;
  slug: string;
  type: string | null;
  thankyou: boolean | null;
  formId: number | null;
  date: string | null;
}

// Async thunk for form submission
export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const adaptedData = {
        firstname: formData.firstname,
        phone: formData.phone,
        email: formData.email,
        company: formData.company || '',
        designation: formData.designation || '',
        message: formData.message,
        page: formData.page || '',
        date: formData.date || '',
        website: formData.website || '',
        about_company: formData.about_company || '',
        demo: formData.demo || false,
        mainBranchAddress: formData.mainBranchAddress || '',
        otherBranches: formData.otherBranches || '',
        trainingsOffered: formData.trainingsOffered || '',
        requirements: formData.requirements || [],
      };

      const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/form/mail`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adaptedData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message || 'Form submission error');
    }
  }
);

const initialState: FormState = {
  id: '',
  type: '',
  formId: 0,
  date: null,
  error: null,
  curriculum: false,
  slug: '',
  isFormOpen: false,
  thankyou: false,
  formSubmitStatus: 'idle',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm: (state) => {
      state.isFormOpen = true;
      state.thankyou = false;
    },
    closeForm: (state) => {
      state.isFormOpen = false;
      state.error = null;
    },
    setThankyou: (state) => {
      state.thankyou = true;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    updateFormFields: (
      state,
      action: PayloadAction<{
        id: string;
        type: string;
        formId: number;
        date?: string;
        curriculum: boolean;
        slug: string;
      }>
    ) => {
      const { id, type, formId, date, curriculum, slug } = action.payload;
      state.id = id;
      state.type = type;
      state.curriculum = curriculum;
      state.formId = formId;
      state.date = date || null;
      state.slug = slug;
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.formSubmitStatus = 'loading';
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.formSubmitStatus = 'succeeded';
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.formSubmitStatus = 'failed';
        state.error =
          typeof action.payload === 'string'
            ? action.payload
            : 'Failed to submit form';
      });
  },
});

export const {
  openForm,
  closeForm,
  setDate,
  updateFormFields,
  setThankyou,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
