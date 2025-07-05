interface FeatureListProps {
  features: string[];
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-success mt-1">✓</span>
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
