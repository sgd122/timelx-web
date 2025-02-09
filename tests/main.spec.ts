import { expect, test } from '@playwright/test';

import { PLACEHOLDERS } from '@/shared/constants/placeholders';

test('event search workflow test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByPlaceholder(PLACEHOLDERS.DATE).fill('2025-01-23');
  await page.getByPlaceholder(PLACEHOLDERS.LOCATION).fill('서울시');

  await page.getByPlaceholder(PLACEHOLDERS.KEYWORD).fill('축제');

  await page.getByRole('button', { name: '검색' }).click();

  await expect(page).toHaveURL(
    new RegExp(
      `/search/result\\?date=2025-01-23&location=%EC%84%9C%EC%9A%B8%EC%8B%9C(&time=.*)?&keyword=%EC%B6%95%EC%A0%9C`
    ),
    { timeout: 10000 }
  );

  console.log('검색 테스트가 성공적으로 수행되었습니다.');
});

test('event detail workflow test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'YOUNG POSSE CONCERT YOUNG' }).click();

  await expect(page).toHaveURL(new RegExp(`/event/0`), { timeout: 10000 });

  console.log('이벤트 이동 테스트가 성공적으로 수행되었습니다.');
});
