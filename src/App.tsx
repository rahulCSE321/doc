import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MoodCompass } from './components/MoodCompass';
import { AssessmentSection } from './components/leafcare/AssessmentSection';
import { TherapistSection } from './components/TherapistSection';
import { NetworkOverview } from './components/NetworkOverview';
import { PsychiatristSection } from './components/PsychiatristSection';
import { CareTeamSection } from './components/CareTeamSection';
import { FaqSection } from './components/FaqSection';
import { CityDirectory } from './components/CityDirectory';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MatchmakerModal } from './components/MatchmakerModal';
import { AssessmentModal } from './components/leafcare/AssessmentModal';
import { ProviderApplyModal } from './components/ProviderApplyModal';
import { SignInModal } from './components/SignInModal';
import { Provider } from './types';

export default function App() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [matchmakerType, setMatchmakerType] = useState<'therapist' | 'psychiatrist' | null>(null);
  const [assessmentCategory, setAssessmentCategory] = useState<'Stress' | 'Anxiety' | 'Depression' | null>(null);
  const [isProviderApplyOpen, setIsProviderApplyOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; phone: string } | null>(null);

  const handleOpenBooking = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  const handleOpenMatchmaker = (type: 'therapist' | 'psychiatrist') => {
    setMatchmakerType(type);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCityFilter = (cityName: string) => {
    const el = document.getElementById('therapists');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#d9e3dd] text-[#132c23] antialiased selection:bg-[#85e05d] selection:text-[#0e382c] flex flex-col font-sans">
      
      {/* Logged in patient toast banner if active */}
      {currentUser && (
        <div className="bg-[#0e382c] text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-emerald-800">
          <span>Logged in as <strong>{currentUser.name}</strong></span>
          <button
            onClick={() => setCurrentUser(null)}
            className="underline text-[11px] text-[#85e05d] hover:text-white ml-2"
          >
            Sign out
          </button>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenMatchmaker={handleOpenMatchmaker}
        onOpenMoodTracker={() => handleScrollTo('mood-compass')}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-4 md:space-y-6">
        
        {/* 1. Hero Section */}
        <HeroSection
          onSelectProvider={handleOpenBooking}
          onOpenMatchmaker={handleOpenMatchmaker}
          onOpenMoodTracker={() => handleScrollTo('mood-compass')}
        />

        {/* 2. Interactive Daily Mood & Wellness Compass */}
        <MoodCompass
          onSelectProvider={handleOpenBooking}
          onOpenMatchmaker={handleOpenMatchmaker}
          onOpenAssessment={() => setAssessmentCategory('Stress')}
        />

        {/* 3. Choose Self-Assessment (Stress, Anxiety, Depression Cards) */}
        <AssessmentSection
          onSelectCategory={(category) => setAssessmentCategory(category)}
        />

        {/* 4. Certified Therapists Showcase */}
        <TherapistSection
          onSelectProvider={handleOpenBooking}
          onOpenMatchmaker={handleOpenMatchmaker}
        />

        {/* 5. Network Overview (Therapists vs Psychiatrists) */}
        <NetworkOverview
          onScrollToTherapists={() => handleScrollTo('therapists')}
          onScrollToPsychiatrists={() => handleScrollTo('psychiatrists')}
        />

        {/* 6. Psychiatric Assessment Section */}
        <PsychiatristSection
          onSelectProvider={handleOpenBooking}
          onOpenMatchmaker={handleOpenMatchmaker}
        />

        {/* 7. Dedicated Care Team & Provider Testimonials */}
        <CareTeamSection
          onOpenProviderApply={() => setIsProviderApplyOpen(true)}
        />

        {/* 8. Frequently Asked Questions (All 10 Questions) */}
        <FaqSection />

        {/* 9. 25+ Cities Across India Directory */}
        <CityDirectory
          onSelectCityFilter={handleSelectCityFilter}
        />

      </main>

      {/* 10. Grand DocMind Footer */}
      <Footer onSelectCityFilter={handleSelectCityFilter} />

      {/* Modals & Dialogs */}
      {selectedProvider && (
        <BookingModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}

      {matchmakerType && (
        <MatchmakerModal
          initialType={matchmakerType}
          onClose={() => setMatchmakerType(null)}
          onSelectProvider={handleOpenBooking}
        />
      )}

      {assessmentCategory && (
        <AssessmentModal
          initialCategory={assessmentCategory}
          onClose={() => setAssessmentCategory(null)}
          onBookSpecialist={() => {
            setAssessmentCategory(null);
            handleOpenMatchmaker('therapist');
          }}
        />
      )}

      {isProviderApplyOpen && (
        <ProviderApplyModal
          onClose={() => setIsProviderApplyOpen(false)}
        />
      )}

      {isSignInOpen && (
        <SignInModal
          onClose={() => setIsSignInOpen(false)}
          onLoginSuccess={(user) => setCurrentUser(user)}
        />
      )}

    </div>
  );
}
