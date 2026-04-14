"use client"
import React, { createContext, useContext } from 'react'
import { Property } from '@/lib/properties'

const PropertiesContext = createContext<Property[]>([])

export function PropertiesProvider({ properties, children }: { properties: Property[], children: React.ReactNode }) {
  return <PropertiesContext.Provider value={properties}>{children}</PropertiesContext.Provider>
}

export function useProperties() {
  return useContext(PropertiesContext)
}
