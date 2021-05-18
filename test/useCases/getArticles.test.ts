import { getAllArticles, getAllArticlesWithModifiers, getOneArticle } from '../../src/application/useCases/getArticles.useCase';

test('basic', () => {
    expect(getAllArticles()).toBe(0);
});