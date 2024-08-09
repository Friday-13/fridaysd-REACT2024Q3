'use client';
import { ComponentProps, PropsWithChildren, useState } from 'react';
import { TPeopleReponse } from '../../services/api-types';
import Loader from '../loader/loader';
import Pagination from '../pagination/pagination';
import PersonInList from '@components/person-in-list/person-in-list';
import { IPerson } from '@services/api-types';
import { useSelector } from 'react-redux';
import { isPeopleLoadingSelector } from '../../store';
import styles from './search-results.module.scss';
import closePerson from '@utils/close-person/close-person';

export interface SearchResultsProps extends PropsWithChildren {
  searchResults?: TPeopleReponse;
  // setPageCallback: (value: number) => void;
}

function getPage(url: string | null) {
  if (url) {
    const page = new URL(url).searchParams.get('page');
    if (page) {
      return Number(page);
    }
  }
  return;
}

function getTotalPages(response: TPeopleReponse) {
  const nextPage = getPage(response.next);
  if (nextPage === undefined) {
    const prevPage = getPage(response.previous);
    if (prevPage !== undefined) {
      return prevPage + 1;
    } else {
      return 1;
    }
  }
  return Math.ceil(response.count / response.results.length);
}

export default function SearchResults(props: SearchResultsProps) {
  console.log(props.searchResults?.results.length);
  // const router = useRouter();
  // const isLoading = useState<boolean>(props.searchResults)[0];

  // if (isLoading) {
  //   return (
  //     <div className={[styles['search-results'], styles['results-frame']].join(' ')}>
  //       <Loader />
  //     </div>
  //   );
  // }

  if (!props.searchResults || props.searchResults.results.length === 0) {
    return <h2>Results Empty</h2>;
  }

  const nextPage = getPage(props.searchResults.next);
  const prevPage = getPage(props.searchResults.previous);
  const totalPages = getTotalPages(props.searchResults);

  function sectionClick() {
    //   if (router.query['id'] !== undefined) {
    //     closePerson(router);
    //   }
  }

  return (
    <section>
      <div
        className={[styles['search-results'], styles['results-frame']].join(' ')}
        onClick={(e) => {
          e.preventDefault;
          sectionClick();
        }}
      >
        <h2>Search results</h2>
        <div className={styles['search-results__list']}>
          {props.searchResults.results.map((result: IPerson, index: number) => (
            <PersonInList person={result} key={index} />
          ))}
        </div>
        {
          // <Pagination
          //   setPageCallback={props.setPageCallback}
          //   nextPage={nextPage}
          //   prevPage={prevPage}
          //   totalPages={totalPages}
          // />
        }
      </div>
    </section>
  );
}
