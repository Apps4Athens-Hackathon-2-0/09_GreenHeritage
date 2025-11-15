import { useState } from 'react';
import { Landmark, TreePine, UtensilsCrossed, Calendar, Accessibility, X, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface FilterPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function FilterPanel({ isOpen = true, onClose }: FilterPanelProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['culture', 'nature']);
  const [selectedTags, setSelectedTags] = useState<string[]>(['family-friendly']);
  const [accessibilityOptions, setAccessibilityOptions] = useState<string[]>([]);

  const categories = [
    { id: 'culture', label: 'Culture', icon: Landmark, color: '#0891b2' },
    { id: 'nature', label: 'Nature', icon: TreePine, color: '#16a34a' },
    { id: 'food', label: 'Food & Dining', icon: UtensilsCrossed, color: '#ea580c' },
    { id: 'events', label: 'Events', icon: Calendar, color: '#9333ea' },
  ];

  const tags = [
    'Family-friendly',
    'Pet-friendly',
    'Free entry',
    'Guided tours',
    'Photography',
    'Historical',
  ];

  const accessibility = [
    'Wheelchair accessible',
    'Audio guide available',
    'Sign language tours',
    'Accessible parking',
  ];

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const toggleTag = (tag: string) => {
    const tagId = tag.toLowerCase().replace(/\s+/g, '-');
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(t => t !== tagId) : [...prev, tagId]
    );
  };

  const toggleAccessibility = (option: string) => {
    const optionId = option.toLowerCase().replace(/\s+/g, '-');
    setAccessibilityOptions(prev =>
      prev.includes(optionId) ? prev.filter(o => o !== optionId) : [...prev, optionId]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="h-full overflow-y-auto bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-cyan-600" />
          <h3>Filters</h3>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => toggleCategory(id)}
              className={`flex w-full items-center gap-3 rounded-xl border p-3 transition-all ${
                selectedCategories.includes(id)
                  ? 'border-cyan-500 bg-cyan-50'
                  : 'border-border bg-white hover:bg-gray-50'
              }`}
            >
              <div
                className="rounded-lg p-2"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon className="h-4 w-4" style={{ color }} />
              </div>
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h4 className="mb-3">Tags</h4>
        <div className="space-y-2">
          {tags.map((tag) => {
            const tagId = tag.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox
                  id={tagId}
                  checked={selectedTags.includes(tagId)}
                  onCheckedChange={() => toggleTag(tag)}
                />
                <Label htmlFor={tagId} className="cursor-pointer text-sm">
                  {tag}
                </Label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Date Range */}
      <div className="mb-6">
        <h4 className="mb-3">Date Range</h4>
        <div className="space-y-2">
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-input-background px-3 py-2 text-sm"
            placeholder="Start date"
          />
          <input
            type="date"
            className="w-full rounded-xl border border-border bg-input-background px-3 py-2 text-sm"
            placeholder="End date"
          />
        </div>
      </div>

      {/* Accessibility */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <Accessibility className="h-4 w-4 text-cyan-600" />
          <h4>Accessibility</h4>
        </div>
        <div className="space-y-2">
          {accessibility.map((option) => {
            const optionId = option.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={optionId}
                  checked={accessibilityOptions.includes(optionId)}
                  onCheckedChange={() => toggleAccessibility(option)}
                />
                <Label htmlFor={optionId} className="cursor-pointer text-sm">
                  {option}
                </Label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full rounded-xl"
        onClick={() => {
          setSelectedCategories([]);
          setSelectedTags([]);
          setAccessibilityOptions([]);
        }}
      >
        Clear All Filters
      </Button>
    </div>
  );
}