import { JSX } from 'react';
import { Maintenance } from '@/components/shared/maintenance';

/**
 * Home component for the maintenance page
 * @returns JSX.Element
 * @description This component renders the maintenance page.
 */
export default function Home(): JSX.Element {
  return (
    <main>
      <Maintenance />
    </main>
  );
}
