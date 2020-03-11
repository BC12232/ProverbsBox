/*
 * Filter Collection
 * A collection of filters be used for proverb selection
 * Add to ProverbData filter
 *
 * Description:
 * Create a filter callback function using one of the following generator functions.
 * Add to filterBank (via ContentManager API)
 *
 * Code for Christ, Jan 4, 2020
 */

import {IVerseSignature, IFilter, IFilterCallback} from './Interfaces';
import Indexer from './Indexer'

export const FilterGenerators : {[name:string] : (input1?: any, input2?: any) => IFilter} = {
    /*
        Example:
        FilterName :
            FilterGenerator(someInput)
                Returns:
                [
                    name: UniqueFilterID: string -- This is just overwritten by the generator's key,
                    callback: Filter
                ]

        Note:
        While multiple filters can be used, only one filter of a particular name can be added
     */

    BySpan : (start:IVerseSignature, end:IVerseSignature) => {
        const c: IFilterCallback = (verse : IVerseSignature) => {
            return Indexer.IsVerseBetween(verse, start, end);
        };
        return {
            name: "BySpan",
            callback: c
        };
    },

    ByType : (type : string) => {
        const c: IFilterCallback = (verse : IVerseSignature) => {
            const verseTypes = Indexer.GetVerseType(Indexer.GetVerseID(verse.Chapter, verse.VerseNumber)).types;
            if (verseTypes != undefined)
            {
                return verseTypes.some(t => t===type);
            }
            return false;
        };
        return {
            name: "ByType",
            callback: c
        };
    },

    /*
    The following nearly works but should be reformatted to return a callback that takes a verse signature
    ByChapter : (chapter : number) => {
        const filter : IFilter = (proverb : IProverb) => (chapter === proverb.Chapter);
        return [
            "Chapter",
            filter]
    },

    ByContent : (text : string) => {
        const filter : IFilter = (proverb) => {
            return proverb.Content.toLowerCase()
                .includes(text.toLowerCase());
        };
        return [
            "Content",
            filter];
    },

    BySaved : () => ["Saved", (proverb) => proverb.Saved]

    */
};
