import { DetailLayout } from '../DetailLayout';

export function FoodTechPage() {
    return (
        <DetailLayout
            title="FoodTech"
            description="From manufacturing to delivery, NeoTeq's food tech solutions enhance visibility, reduce waste, and improve decision-making through automation and analytics."
            whatWeOffer={[
                "AI-based demand forecasting & supply optimization",
                "Food traceability with blockchain & IoT data integration",
                "Real-time quality & freshness monitoring",
                "Predictive analytics for logistics and inventory",
                "Consumer feedback intelligence using NLP and sentiment models"
            ]}
            benefits={[
                "IoT • Blockchain • NLP • Predictive Analytics"
            ]}
            benefitsTitle="Technologies"
            type="Solution"
        />
    );
}
