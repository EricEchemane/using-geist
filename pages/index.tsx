import { Button } from '@geist-ui/core';
import { useThemeChangerContext } from 'contexts/theme_changer';
import React from 'react';

export default function Home() {
  const { switchThemes } = useThemeChangerContext();

  return <>
    <h1> Eric Echemane </h1>
    <Button margin={2} onClick={switchThemes}> Toggle Theme </Button>
  </>;
}
