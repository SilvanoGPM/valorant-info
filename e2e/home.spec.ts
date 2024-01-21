import { test, expect } from '@playwright/test';

test('has title and description', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Visualizar Contéudo' }).click();

  await expect(
    page.getByRole('heading', {
      name: /Transforme-se em um mestre no Valorant através do aprendizado!/i,
    }),
  ).toBeInViewport();

  await expect(
    page.getByText(
      /Afinal, informação é poder, então veja dados sobre os agentes, mapas e armas e torne-se um jogador implacável./i,
    ),
  ).toBeInViewport();
});

test('scroll to content section when button click', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Visualizar Contéudo' }).click();

  await expect(
    page.getByRole('heading', { name: /Nosso conteúdo/i }),
  ).toBeInViewport();
});

test('open agents page when link click', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByTestId('agents').click();

  await page.waitForURL('/agents');

  await expect(page.getByRole('heading', { name: 'Agentes' })).toBeVisible();
});

test('open weapons page when link click', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByTestId('weapons').click();

  await page.waitForURL('/weapons');

  await expect(page.getByRole('heading', { name: 'Armas' })).toBeVisible();
});

test('open maps page when link click', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByTestId('maps').click();

  await page.waitForURL('/maps');

  await expect(page.getByRole('heading', { name: 'Mapas' })).toBeVisible();
});
