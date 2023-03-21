import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Th,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const ClientNameCell = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchName: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const targetEl = event.target as HTMLFormElement;
    const inputValue = (targetEl[0] as HTMLInputElement).value;

    if (inputValue) {
      searchParams.set('search', inputValue);
      searchParams.delete('page');
      setSearchParams(searchParams);
    }
  };

  const handleResetSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
      searchParams.delete('page');
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  return (
    <Th scope='col'>
      고객 이름
      <form onSubmit={handleSearchName}>
        <InputGroup>
          <Input ref={searchInputRef} />
          <InputRightElement>
            <IconButton
              type='submit'
              aria-label='Search database'
              icon={<SearchIcon />}
            />
            <IconButton
              onClick={handleResetSearch}
              type='button'
              aria-label='Search database'
              icon={<SmallCloseIcon />}
            />
          </InputRightElement>
        </InputGroup>
      </form>
    </Th>
  );
};

export default ClientNameCell;
