import React from 'react'

type ProviderComponent = React.ComponentType<any>

export type Providers<T extends ProviderComponent> = Array<T | [T, Omit<React.ComponentProps<T>, 'children'>]>

function combineProviders<T extends ProviderComponent>(...providers: Providers<T>): ProviderComponent {
  return providers.reduce(
    (AccumulatedProviders: React.ComponentType, p) => {
      const Provider: ProviderComponent = Array.isArray(p) ? p[0] : p
      const props = Array.isArray(p) ? p[1] : {}
      const combined = ({ children }: React.PropsWithChildren<unknown>) =>
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      return combined
    },
    ({ children }) => <>{children}</>,
  )
}

const _providers: Array<{ provider: ProviderComponent, props?: Omit<React.ComponentProps<ProviderComponent>, 'children'> }> = []

export default (() => {
  return {
    push: <T extends ProviderComponent>(provider: T, props?: Omit<React.ComponentProps<T>, 'children'>) => _providers.push({ provider, props })
  }
})()

export function Provide<T extends ProviderComponent>({ children, providers }: React.PropsWithChildren<{ providers?: Providers<T> }>) {
  const CombinedProviders = combineProviders(...providers ? providers : _providers.map(({ provider, props }) => [provider, props]) as Providers<T>)
  return <CombinedProviders>{children}</CombinedProviders>
}
