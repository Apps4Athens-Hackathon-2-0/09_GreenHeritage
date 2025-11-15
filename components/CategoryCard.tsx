import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  color: string;
}

export function CategoryCard({ icon: Icon, label, color }: CategoryCardProps) {
  return (
    <button className="group relative overflow-hidden rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-lg">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ background: `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)` }}
      />
      <div className="relative flex flex-col items-center gap-3">
        <div 
          className="rounded-2xl p-4 transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="h-6 w-6" style={{ color }} />
        </div>
        <span className="text-sm text-foreground">{label}</span>
      </div>
    </button>
  );
}