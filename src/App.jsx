import React, { useState } from 'react';
import { SAMPLE_PRESETS } from './data/presets';
import { THEMES } from './data/themes';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { IDCardForm } from './components/form/IDCardForm';
import { CardPreviewViewport } from './components/card/CardPreviewViewport';
import { IDCardFront } from './components/card/IDCardFront';
import { IDCardBack } from './components/card/IDCardBack';

export default function App() {
  const [formData, setFormData] = useState(SAMPLE_PRESETS.mit);
  const [currentThemeKey, setCurrentThemeKey] = useState(SAMPLE_PRESETS.mit.theme);
  const [orientation, setOrientation] = useState('vertical');
  const [activePreset, setActivePreset] = useState('mit');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (dataUrl) => {
    setFormData((prev) => ({ ...prev, avatarUrl: dataUrl }));
  };

  const handleApplyPreset = (presetKey) => {
    const selected = SAMPLE_PRESETS[presetKey];
    if (selected) {
      setFormData(selected);
      setCurrentThemeKey(selected.theme);
      setActivePreset(presetKey);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 1. Navbar */}
      <Navbar
        onPrint={handlePrint}
        onApplyPreset={handleApplyPreset}
        currentPreset={activePreset}
      />

      {/* 2. Main On-Screen Studio Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md">
            <h2 className="text-xl font-black text-white tracking-tight">Student Credentials</h2>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              Update information below. Changes reflect across both sides in real-time.
            </p>
            <IDCardForm
              formData={formData}
              onChange={handleInputChange}
              onPhotoUpload={handlePhotoUpload}
            />
          </div>
        </section>

        <section className="lg:col-span-5 sticky top-24">
          <CardPreviewViewport
            formData={formData}
            currentThemeKey={currentThemeKey}
            onThemeChange={setCurrentThemeKey}
            orientation={orientation}
            onOrientationChange={setOrientation}
          />
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* ========================================================
          4. DEDICATED PRINT CONTAINER (Front + Back Side-by-Side)
          Hidden on screen, but becomes the ONLY element printed
         ======================================================== */}
      <div id="printable-id-card-area" className="hidden">
        <IDCardFront
          data={formData}
          theme={THEMES[currentThemeKey]}
          orientation={orientation}
          showSheen={false}
        />
        <IDCardBack
          data={formData}
          theme={THEMES[currentThemeKey]}
          orientation={orientation}
        />
      </div>
    </div>
  );
}