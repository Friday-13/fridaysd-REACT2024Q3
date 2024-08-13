import { NextRouter } from 'next/router';

function closePerson(router: NextRouter) {
  const { id: _id, ...queryParams } = router.query;
  router.push({
    pathname: '/',
    query: queryParams,
  });
}

export default closePerson;
