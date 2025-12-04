import { DetailLayout } from '../DetailLayout';

export function SupplyChainPage() {
    return (
        <DetailLayout
            title="Supply Chain Solutions"
            description="We improve supply chain operations using automation, AI, and smart data workflows."
            whatWeOffer={[
                "Inventory forecasting",
                "Real-time tracking",
                "Supplier management"
            ]}
            benefits={[
                "Inventory forecasting",
                "Real-time tracking",
                "Supplier management"
            ]}
            benefitsTitle="We Solve"
            type="Solution"
        />
    );
}
