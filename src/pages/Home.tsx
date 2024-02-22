import React from 'react'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { CarCatalog } from '../components/CarCatalog/CarCatalog'
import { FinancingCta } from '../components/FinancingCta/FinancingCta'

export const Home = () => {
  return (
    <>
        <HeroSection />
        <CarCatalog />
        <FinancingCta />
    </>
  )
}
