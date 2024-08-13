export const pushMock = jest.fn();
export const useRouterMocked = jest.fn().mockReturnValue({
  push: pushMock,
});

const generateSearchParams = (page: string) => {
  const searchParams = new URLSearchParams();
  searchParams.set('page', page);
  return searchParams;
};
export const useSearchParamsMocked = jest.fn().mockReturnValue(generateSearchParams('3'));
