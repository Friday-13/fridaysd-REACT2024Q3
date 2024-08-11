export const pushMock = jest.fn();
export const useRouterMocked = jest.fn().mockReturnValue({
  push: pushMock,
});

