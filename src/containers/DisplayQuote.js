import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quote from '../quote/Quote';
import More from '../quote/MoreQuotes';
import { setQuote, setQuotePromise } from '../actions/quoteActions';
import { getQuote } from '../selectors/quoteSelector';

export default function DisplayQuote() {
  const quote = useSelector(getQuote);
  const dispatch = useDispatch();

  const moreQuotesThunk = () => dispatch(setQuote());
  const moreQuotes = () => dispatch(setQuotePromise());

  useEffect(() => {
    moreQuotes();
  }, []);

  return (
    <>
      <More more={moreQuotesThunk} />
      <Quote quote={quote} />
    </>
  );
}
