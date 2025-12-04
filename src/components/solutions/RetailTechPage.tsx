import { DetailLayout } from '../DetailLayout';

export function RetailTechPage() {
    return (
        <DetailLayout
            title="Retail Tech for Garments"
            description="NeoTeq brings AI and analytics to the garment industry—from design to distribution—enabling faster decisions, personalized experiences, and reduced waste."
            whatWeOffer={[
                "AI-based visual search and virtual try-on",
                "Smart inventory & merchandising predictions",
                "Edge vision systems for quality control",
                "AI-powered feedback and sentiment dashboards",
                "Integrated retail analytics and customer intelligence"
            ]}
            benefits={[
                "Computer Vision • Edge AI • Customer Analytics"
            ]}
            benefitsTitle="Technologies"
            type="Solution"
        />
    );
}
