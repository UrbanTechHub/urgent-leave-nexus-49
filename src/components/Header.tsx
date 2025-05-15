
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 mr-2">
            <img
              src="https://www.un.org/sites/un2.un.org/themes/bootstrap_un_theme/images/logo-footer-en.svg"
              alt="UN Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-lg font-medium text-unblue-dark hidden md:block">
            United Nations Emergency Leave
          </h1>
          <h1 className="text-lg font-medium text-unblue-dark md:hidden">
            UN Emergency Leave
          </h1>
        </div>
        <Button
          variant="outline"
          className="text-unblue border-unblue hover:bg-unblue hover:text-white transition-colors"
          asChild
        >
          <a href="#application-form">Apply Now</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
