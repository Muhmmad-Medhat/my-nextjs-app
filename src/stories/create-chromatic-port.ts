interface ViewPortProps {
  viewPort: 'phone' | 'wide';
  theme: 'light' | 'dark';
}

export const StorybookChromaticViewPort = ({
  viewPort,
  theme,
}: ViewPortProps) => {
  const chromaticViewPort = viewPort === 'wide' ? [1200] : [420];

  return {
    viewport: {
      defaultViewport: viewPort,
    },
    chromatic: {
      viewports: chromaticViewPort,
    },
    currentTheme: theme,
  };
};
