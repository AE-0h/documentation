import React from "react";
import SearchBar from "@theme-original/SearchBar";
import AskCookbook from "@cookbookdev/docsbot/react";

export default function SearchBarWrapper(props) {
  return (
    <>
      <AskCookbook
        apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWVmYWQ0ZGViNTUzM2NmODA2OTEzNTAiLCJpYXQiOjE3MTAyMDYyODUsImV4cCI6MjAyNTc4MjI4NX0.On3TXz2PyBdt-JnPaoPSm4MqbLJrliKCRPzjUClCGRM"
        alwaysOpen={false}
        noFastMode={false}
      />
    </>
  );
}
