import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const CategoriesSearch = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <div className="text-center">
        <h2 className="font-bold text-4xl md:text-5xl tracking-wide">
          Search <span className="text-primary">Doctors</span>
        </h2>
        <p className="text-gray-500 text-xl">
          Search your doctor and Book Your Appointment in one click
        </p>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default CategoriesSearch;
