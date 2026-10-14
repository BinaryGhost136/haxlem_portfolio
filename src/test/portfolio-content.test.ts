import { describe, expect, it } from 'vitest';
import { content, experiences, qualifications, skillGroups, type Language } from '@/lib/portfolio-content';

describe('Portfolio content', () => {
  it('provides every short message in all three languages', () => {
    for (const value of Object.values(content)) {
      const entries = Array.isArray(value) ? value : [value];
      for (const entry of entries) {
        for (const language of ['fr', 'en', 'es'] as Language[]) {
          expect(entry[language].trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('retains all six CV financial institutions and the supplied education', () => {
    expect(experiences).toHaveLength(6);
    expect(new Set(experiences.map(entry => entry.company)).size).toBe(6);
    expect(qualifications).toHaveLength(3);
    expect(skillGroups).toHaveLength(3);
  });
});