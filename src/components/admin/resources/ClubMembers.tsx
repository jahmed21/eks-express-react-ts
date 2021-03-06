import React from 'react';
// https://marmelab.com/react-admin/Tutorial.html
// https://github.com/marmelab/react-admin/issues/4505
// @ts-ignore
import {AutocompleteInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput} from 'react-admin';
import { parse } from 'query-string';

// https://marmelab.com/react-admin/AdvancedTutorials.html
export const ClubMemberCreate = (props: any) => {
  const { clubId } = parse(props.location.search);
  const redirect = clubId ? `/clubs/${clubId}` : false;
  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="clubId" initialValue={clubId} disabled/>
        <ReferenceInput
          label="Member"
          source="memberId"
          reference="members">
          <AutocompleteInput optionText="name"/>
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
};