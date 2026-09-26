import { render, screen, within } from '@testing-library/react';
import App from './App';
import projects from './data/projectsData';

// Analytics must not run in tests, and CRA's Jest can't resolve the package's
// "exports" subpath anyway.
jest.mock('@vercel/analytics/react', () => ({ Analytics: () => null }), { virtual: true });

const RESUME = '/Doc/Mobile-dev-nawfel_boulkroune_cv.pdf';

test('shows the name as the page heading', () => {
  render(<App />);
  // Exact name: the animated words must read as the plain name, once.
  expect(screen.getByRole('heading', { level: 1, name: 'Nawfel Boulkroune' })).toBeInTheDocument();
});

test('every resume button points at the CV', () => {
  render(<App />);
  const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
  expect(resumeLinks.length).toBeGreaterThan(0);
  resumeLinks.forEach((link) => expect(link).toHaveAttribute('href', RESUME));
});

test('renders every section the navigation links to', () => {
  const { container } = render(<App />);
  ['about', 'experience', 'projects', 'sofaShowcaseSection', 'amaya-showcase', 'side-projects', 'contact']
    .forEach((id) => expect(container.querySelector(`#${id}`)).toBeInTheDocument());
});

test('never links to a store page for an app that was removed from the stores', () => {
  render(<App />);
  const hrefs = screen.getAllByRole('link').map((a) => a.getAttribute('href'));
  projects
    .filter((p) => p.delisted)
    .flatMap((p) => [p.playStoreUrl, p.appStoreUrl])
    .filter(Boolean)
    .forEach((url) => expect(hrefs).not.toContain(url));
});

test('does not show an availability badge', () => {
  render(<App />);
  expect(screen.queryByText(/available for/i)).not.toBeInTheDocument();
});

test('the contact form lets the browser validate required fields', () => {
  render(<App />);
  const form = screen.getByRole('form', { name: /contact form/i });
  expect(form).not.toHaveAttribute('novalidate');
  expect(within(form).getByLabelText(/email address/i)).toBeRequired();
});
