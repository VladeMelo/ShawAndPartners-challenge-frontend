import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { UserContainer, AvatarAndLogin, Container, ModalContainer, ModalHeader, RepositoriesList, Repository } from './styles';

import api from '../../services/api';

interface UserCardProps {
  currentPageInGithub: number;
}

interface UserProps {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string
}

interface UserRepositoriesProps {
  name: string;
  id: number;
  html_url: string
}

const UsersCard = ({currentPageInGithub}: UserCardProps) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>([]);
  const [userSelected, setUserSelected] = useState<UserProps>({} as UserProps)
  const [userRepositories, setUserRepositories] = useState<UserRepositoriesProps[]>([]);

  const currentPageInGithubMemo = useMemo(() => {
    return currentPageInGithub;
  }, [currentPageInGithub])

  useEffect(() => {
    // get two pages of users
    api.get<UserProps[]>('', {
      params: {
        since: currentPageInGithubMemo // this variables means that you are going to get the users that have the id from this variable plus 1 until this varible plus 46 (Ex.: since = 0 | from id 1 until id 46)
      }
    }).then(firstPage => {
      api.get<UserProps[]>('', {
        params: {
          since: currentPageInGithubMemo + 46 // because there are 46 people per page and i want to get the first from the other page
        }
      }).then(secondPage => {
        setUsers([...firstPage.data,...secondPage.data])
        console.log([...firstPage.data,...secondPage.data])
      })
    })
  }, [currentPageInGithubMemo])

  useEffect(() => {
    api.get<UserRepositoriesProps[]>(`${userSelected.login}/repos`, {
      params: {
        username: userSelected.login
      }
    }).then(response => {
      setUserRepositories(response.data)
    })
  }, [userSelected])

  const handleCardOpen = useCallback((user) => {
    setCardOpen(!cardOpen);
    setUserSelected(user)
  }, [cardOpen])

  return (
    <>
      {users.map(user => (
        <UserContainer
          key={user.id}
          onClick={() => handleCardOpen(user)}
        >
          <AvatarAndLogin>
            <div>
              <img src={user.avatar_url} alt='Avatar' />
            </div>
            <h1>{user.login}</h1>
          </AvatarAndLogin>
          <h2>{user.id}</h2>
        </UserContainer>
      ))}
      {cardOpen &&
        <Container>
          <ModalContainer>
            <ModalHeader>
              <div>
                <img src={userSelected.avatar_url} alt='Perfil' />
              </div>
              <h1>{userSelected.login}</h1>
              <a
                href={userSelected.html_url}
              >
                {userSelected.html_url}
              </a>
              <h3>{userSelected.id}</h3>
            </ModalHeader>

            <RepositoriesList>
              {userRepositories.map(repository => (
                <Repository
                  key={repository.id}
                >
                  <div>
                    <h1>{repository.name}</h1>
                    <a
                      href={repository.html_url}
                    >
                      {repository.html_url}
                      </a>
                  </div>

                  <h3>{repository.id}</h3>
                </Repository>
              ))}
            </RepositoriesList>
          </ModalContainer>
        </Container>
      }
    </>
  )
}

export default UsersCard;