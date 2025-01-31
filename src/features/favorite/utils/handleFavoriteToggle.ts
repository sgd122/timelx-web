export const handleFavoriteToggle = async (
  favorite: boolean,
  postId: number,
  refetch?: () => Promise<void>
) => {
  try {
    const response = await fetch(`/api/favorite/${postId}`, {
      method: 'POST',
      body: JSON.stringify({ favorite }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('API 요청 실패');
    }

    if (refetch) {
      await refetch();
    }
  } catch (error) {
    console.error('찜하기 상태 업데이트 실패:', error);
    throw error;
  }
};
