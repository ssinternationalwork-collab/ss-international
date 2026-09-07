export const metadata = {
  title: 'SS International - Company Profile',
};

export default function CompanyProfilePage() {
  return (
    <iframe
      src="/company-profile.pdf#toolbar=0&navpanes=0&scrollbar=0"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', border: 'none' }}
      title="SS International Company Profile"
    />
  );
}
