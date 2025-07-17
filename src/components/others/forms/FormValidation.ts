// utils/formValidation.ts
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^\+?[1-9]\d{7,14}$/;

interface CorporateFormData {
  firstname: string;
  designation: string;
  email: string;
  phone: string;
  mainBranchAddress: string;
  company: string;
  website: string;
  trainingsOffered: string;
}

export function formValidation(state: CorporateFormData): string | null {
  const {
    firstname,
    designation,
    email,
    phone,
    mainBranchAddress,
    company,
    website,
    trainingsOffered,
  } = state;

  if (!firstname.trim()) return "Name is required.";
  if (!designation.trim()) return "Designation is required.";
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) return "Enter a valid phone number.";
  if (!website.trim()) return "Website link is required.";

  return null;
}
