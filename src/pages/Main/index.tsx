import React, { useCallback, useState } from 'react'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import { Container, Header, PageSelector, UsersList } from './styles'

import UsersCard from '../../components/UsersCard';

import GlobalStyle from '../../styles/global'

const Main = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageInGithub, setCurrentPageInGithub] = useState(0);

  const handleToNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
    setCurrentPageInGithub(currentPageInGithub + 92) // to get the next two pages (Ex.: 1 -> 46 && 47 -> 92)
  }, [currentPage, currentPageInGithub])

  const handleToPreviousPage = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setCurrentPageInGithub(currentPageInGithub - 92) // to get the previous two pages
    }
  }, [currentPage, currentPageInGithub])

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Header></Header>
        <PageSelector>
          <FiArrowLeftCircle
            onClick={handleToPreviousPage}
          />
          <h1>{currentPage}</h1>
          <FiArrowRightCircle
            onClick={handleToNextPage}
          />
        </PageSelector>
        <UsersList>
          <UsersCard
            currentPageInGithub={currentPageInGithub}
          />
        </UsersList>
      </Container>
    </>
  )  
}

export default Main;