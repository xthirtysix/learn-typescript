/** Type next function and it's request & response
 * @function
 *  async function getFaqs(req) {
 *      const res = await fetch('/faqs', {
 *          method: 'POST',
 *          body: JSON.stringify(req)
 *      })
 *      const data = await res.json()
 *      return data
 *  }
 *
 * @request
 *  {
 *      "topicId": 5,
 *      "status": "published" // or "draft" or "deleted"
 *  }
 *
 * @response
 *  [
 *      {
 *          "question": "Is it?"
 *          "answer": "It is",
 *          "tags": [
 *              "popular",
 *              "new"
 *          ],
 *          "likes": 3,
 *          "satus: "published"
 *      }
 *  ]
 */

// SOLUTION
interface IReq {
    topicId: number;
    status: FaqStatus;
}

interface IRes {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: FaqStatus;
}

enum FaqStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted',
}

async function getFaqs(req: IReq): Promise<IRes[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req),
    });

    const data: Promise<IRes[]> = await res.json();
    return data;
}
