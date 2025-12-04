import { DetailLayout } from '../DetailLayout';

export function HealthTechPage() {
    return (
        <DetailLayout
            title="HealthTech"
            description="NeoTeq develops AI-powered healthcare platforms that automate workflows, enhance patient care, and maintain regulatory compliance—ensuring speed, precision, and safety."
            whatWeOffer={[
                "Multi-location hospital management (HIPAA-compliant)",
                "Real-time patient monitoring and dispatch automation",
                "Predictive analytics for hospital operations",
                "Computer vision for medical imaging and diagnostics",
                "IoT integration for remote patient tracking and smart devices"
            ]}
            benefits={[
                "99.9% uptime • Enhanced patient response • Optimized doctor workflows"
            ]}
            benefitsTitle="Technologies"
            type="Solution"
        />
    );
}
