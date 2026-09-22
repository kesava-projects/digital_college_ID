import React from 'react';
import { FormAccordion } from '../common/FormAccordion';
import { FormField } from '../common/FormField';
import { SelectField } from '../common/SelectField';

export const IDCardForm = ({ formData, onChange, onPhotoUpload }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onPhotoUpload(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <FormAccordion title="Institution & Premise" icon="🏛️" subtitle="Set official university details">
        <FormField
          label="Institution Name"
          name="institutionName"
          value={formData.institutionName}
          onChange={onChange}
          placeholder="e.g. Stanford University"
        />
        <FormField
          label="Campus Location"
          name="campusCity"
          value={formData.campusCity}
          onChange={onChange}
          placeholder="e.g. Stanford, CA"
        />
        <FormField
          label="Short Acronym"
          name="institutionCode"
          value={formData.institutionCode}
          onChange={onChange}
          placeholder="e.g. STAN"
        />
      </FormAccordion>

      <FormAccordion title="Cardholder Identity" icon="👤" subtitle="Personal and credential records">
        <FormField
          label="Full Legal Name"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          placeholder="e.g. Marcus Vance"
          required
        />
        <FormField
          label="Registration / Student ID"
          name="studentId"
          value={formData.studentId}
          onChange={onChange}
          placeholder="e.g. ST-9912-BIO"
          required
        />
        <FormField
          label="Specialization / Degree"
          name="degree"
          value={formData.degree}
          onChange={onChange}
          placeholder="e.g. Computer Science & AI"
        />
        <SelectField
          label="Enrollment Type"
          name="role"
          value={formData.role}
          onChange={onChange}
          options={[
            { value: 'Undergraduate Scholar', label: 'Undergraduate Scholar' },
            { value: 'Graduate Candidate', label: 'Graduate Candidate' },
            { value: 'Ph.D Researcher', label: 'Ph.D Researcher' },
            { value: 'Faculty / Staff', label: 'Faculty / Staff' }
          ]}
        />
      </FormAccordion>

      <FormAccordion title="Medical & Validity" icon="🛡️" subtitle="Emergency contacts and expiration">
        <FormField
          label="Duration / Batch"
          name="batchYear"
          value={formData.batchYear}
          onChange={onChange}
          placeholder="2024 - 2028"
        />
        <FormField
          label="Expiration (MM/YYYY)"
          name="validUntil"
          value={formData.validUntil}
          onChange={onChange}
          placeholder="06 / 2028"
        />
        <SelectField
          label="Blood Group"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={onChange}
          options={[
            { value: 'A+ POS', label: 'A+ POS' },
            { value: 'A- NEG', label: 'A- NEG' },
            { value: 'B+ POS', label: 'B+ POS' },
            { value: 'B- NEG', label: 'B- NEG' },
            { value: 'O+ POS', label: 'O+ POS' },
            { value: 'O- NEG', label: 'O- NEG' },
            { value: 'AB+ POS', label: 'AB+ POS' },
            { value: 'AB- NEG', label: 'AB- NEG' }
          ]}
        />
        <FormField
          label="Emergency SOS Line"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={onChange}
          placeholder="+1 (555) 000-0000"
        />
      </FormAccordion>

      <FormAccordion title="Cardholder Portrait" icon="📷" subtitle="Upload photograph">
        <div className="col-span-full">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full text-xs text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
          />
        </div>
      </FormAccordion>
    </form>
  );
};