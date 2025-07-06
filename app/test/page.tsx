// test/page.tsx
'use client';

import MyAccountModal from '@/components/auth/My-account-modal';

function Page() {
  const handleClose = () => {
    console.log('Modal closed');
    // You could add state here to control modal open/close if needed
  };

  return (
    <div>
      <MyAccountModal
        isOpen={true}
        onClose={handleClose}
        userUuid="user-123aksj54"
      />
    </div>
  );
}

export default Page;
