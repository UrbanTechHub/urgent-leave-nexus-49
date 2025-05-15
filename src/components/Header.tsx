
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 mr-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/1200px-UN_emblem_blue.svg.png"
              alt="UN Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <h1 className="text-lg font-medium text-unblue-dark hidden md:block font-serif">
            United Nations Emergency Leave
          </h1>
          <h1 className="text-lg font-medium text-unblue-dark md:hidden font-serif">
            UN Emergency Leave
          </h1>
        </Link>
        <Button
          variant="outline"
          className="text-unblue border-unblue hover:bg-unblue hover:text-white transition-colors"
          asChild
        >
          <Link to="/apply">Apply Now</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
