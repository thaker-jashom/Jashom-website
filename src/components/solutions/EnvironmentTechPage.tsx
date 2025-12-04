import { DetailLayout } from '../DetailLayout';

export function EnvironmentTechPage() {
    return (
        <DetailLayout
            title="EnvironmentTech"
            description="NeoTeq creates digital ecosystems that monitor, predict, and reduce environmental impact using AI and data automation."
            whatWeOffer={[
                "AI-driven emission & energy optimization",
                "ESG data pipeline & reporting automation",
                "Predictive analytics for air, water, and soil quality",
                "Real-time dashboards connected with IoT & satellite data",
                "Sustainability scoring and compliance reporting"
            ]}
            benefits={[
                "IoT • Satellite Data • ESG Automation • Real-time Analytics"
            ]}
            benefitsTitle="Technologies"
            type="Solution"
        />
    );
}
