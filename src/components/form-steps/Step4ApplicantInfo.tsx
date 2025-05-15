
import React, { useRef } from 'react';
import { useFormContext } from '@/contexts/FormContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", 
  "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", 
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", 
  "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", 
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", 
  "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
  "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", 
  "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", 
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", 
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", 
  "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", 
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", 
  "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", 
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
  "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const Step4ApplicantInfo = () => {
  const { formData, updateFormData, nextStep, prevStep, isStepValid, setIdProofFile } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const handleCountryChange = (value: string) => {
    updateFormData({ country: value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdProofFile(file);
    }
  };
  
  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Applicant Information</h2>
      <p className="text-center mb-8 text-gray-600">
        Please provide your contact details as the applicant requesting leave
      </p>
      
      <div className="space-y-6">
        <div className="grid gap-4">
          <Label htmlFor="applicantName" className="text-gray-700">
            Your Full Name
          </Label>
          <Input
            id="applicantName"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="email" className="text-gray-700">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="phone" className="text-gray-700">
            Phone Number (with country code)
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g., +1 555-123-4567"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="country" className="text-gray-700">
            Country
          </Label>
          <Select value={formData.country} onValueChange={handleCountryChange}>
            <SelectTrigger className="w-full p-3 border border-gray-300">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px]">
              {COUNTRIES.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="address" className="text-gray-700">
            Address
          </Label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="p-3 border border-gray-300"
            required
          />
        </div>
        
        <div className="grid gap-4">
          <Label htmlFor="idProof" className="text-gray-700">
            ID Proof Upload (Passport, National ID, etc.)
          </Label>
          <div className="flex items-center">
            <input
              ref={fileInputRef}
              id="idProof"
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              className="border-gray-300 text-gray-700"
              onClick={() => fileInputRef.current?.click()}
            >
              Choose File
            </Button>
            <span className="ml-3 text-gray-600">
              {formData.idProof ? formData.idProof.name : "No file chosen"}
            </span>
          </div>
          <p className="text-xs text-gray-500">
            Accepted formats: JPG, PNG, PDF. Maximum size: 5MB
          </p>
        </div>
      </div>
      
      <div className="flex justify-between mt-10">
        <Button 
          onClick={prevStep}
          variant="outline" 
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Back
        </Button>
        <Button 
          onClick={nextStep} 
          disabled={!isStepValid(4)}
          className="bg-unblue hover:bg-unblue-dark text-white font-medium"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Step4ApplicantInfo;
