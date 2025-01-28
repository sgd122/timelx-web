import { expect, test } from '@playwright/test';

test('event search workflow test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByPlaceholder('날짜 입력').fill('2025-01-23');
  await page.getByPlaceholder('지역 입력').fill('서울시');

  const timeInput = page.getByPlaceholder('17:00');
  await timeInput.click();
  await timeInput.press('ArrowUp');
  await timeInput.press('Shift+Tab');
  await timeInput.press('ArrowUp');
  await timeInput.press('Shift+Tab');
  await timeInput.press('ArrowUp');
  // await timeInput.fill('10:00 - 18:00');

  await page.getByPlaceholder('#축제 #강연 #할인행사').fill('축제');

  await page.getByRole('button', { name: '검색' }).click();

  await expect(page).toHaveURL(
    new RegExp(
      `/search/result\\?date=2025-01-23&location=%EC%84%9C%EC%9A%B8%EC%8B%9C(&startTime=.*&endTime=.*)?&keyword=%EC%B6%95%EC%A0%9C`
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
