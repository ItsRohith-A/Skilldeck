import { FaRocket, FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import { MdLeaderboard } from 'react-icons/md';
import logo from '../../../../public/logos/mainlogo.svg'
import Image from 'next/image';

const SkillDeckIntro = () => {
    return (
        <section className="px-6 py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white text-gray-800">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Intro */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl flex items-center gap-x-2 justify-center font-bold text-prime-dark">
                        <Image src={logo} alt="logo" />
                        : The Growth Engine for Training Companies
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        A fully automated, cost-effective plug-and-play platform that puts your training business on a fast track —
                        with minimal effort and maximum scalability.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<FaRocket className="text-blue-600 text-2xl" />}
                        title="All-in-One Platform"
                        desc="Built for training institutes with every tool & feature you need."
                    />
                    <FeatureCard
                        icon={<FaMoneyBillWave className="text-green-600 text-2xl" />}
                        title="Cut Costs by 40%"
                        desc="Automate your operations & save resources across departments."
                    />
                    <FeatureCard
                        icon={<FaUsers className="text-purple-600 text-2xl" />}
                        title="Perfect for Startups"
                        desc="Get premium features & scalable tech with minimal budget."
                    />
                </div>

                {/* Founder info */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <MdLeaderboard className="text-blue-500" />
                        Developed by Proven Experts
                    </h2>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        SkillDeck is built by <strong>Manjunath Chowdary</strong>, Ex-Marketing Head of KnowledgeHut (Upgrad),
                        founder of KandraDigital, and strategist for top training companies like:
                    </p>

                    <ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700 list-disc list-inside">
                        {[
                            'Knowledgehut', 'Zeolearn', 'Invensislearning', 'StarAgile', 'PremierAgile',
                            'AgileAsia.com.sg', 'Simpliaxis', 'Nevolearn', 'VLSIFirst', 'VlsiGuru',
                            'AgileSpark', 'Edugorilla', 'Scala.com.sg', 'Skilldots.com', 'Skilluped.com',
                        ].map((name) => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="text-center pt-6">
                    <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-700 transition">
                        🚀 Connect with Us & Automate Your Training Business
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                        Generate 4× leads at 3× volume with SkillDeck’s tech & marketing automation.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300">
        <div className="flex items-center gap-3 mb-3">{icon}<h3 className="font-semibold text-lg">{title}</h3></div>
        <p className="text-gray-600 text-sm">{desc}</p>
    </div>
);

export default SkillDeckIntro;
