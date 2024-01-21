import { test, expect } from '@playwright/test';

test('open official valorant page when link click', async ({
  page,
  context,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Jogue agora' }).click(),
  ]);

  expect(newPage.url()).toEqual('https://playvalorant.com/pt-br/');
});

test('open github page when link click', async ({ page, context }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Github' }).click(),
  ]);

  expect(newPage.url()).toEqual('https://github.com/SilvanoGPM/valorant-info');
});

test('open agents page when link click', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Agentes' }).click();

  await page.waitForURL('/agents');

  await expect(page.getByRole('heading', { name: 'Agentes' })).toBeVisible();
});

test('open maps page when link click', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Mapas' }).click();

  await page.waitForURL('/maps');

  await expect(page.getByRole('heading', { name: 'Mapas' })).toBeVisible();
});

test('open weapons page when link click', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Armas' }).click();

  await page.waitForURL('/weapons');

  await expect(page.getByRole('heading', { name: 'Armas' })).toBeVisible();
});
