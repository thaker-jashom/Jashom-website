import { DetailLayout } from '../DetailLayout';

export function StaffAugmentationPage() {
    return (
        <DetailLayout
            title="Staff Augmentation"
            description="Add expert developers to your team on demand."
            whatWeOffer={[
                "Trained engineers",
                "On-demand hiring",
                "Project-based support"
            ]}
            benefits={[
                "Save hiring time",
                "Scale quickly",
                "Flexible engagement"
            ]}
            type="Service"
        />
    );
}
