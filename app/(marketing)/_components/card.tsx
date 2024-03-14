import { BookOpenText, FileText, MoveRight } from "lucide-react"
import Link from "next/link"

export const Card = () => {
  return (
    <div  className="blockcard">
      <div className="block">
        <div className="block_yellow_theme">
          <div className="blockSlide">
            <div className="blockHeader">
              <span className="docicon">
                <FileText color="#faa700" />
              </span>
              <div className="blocktitle">
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-bold">
                  Docs
                </h3>
              </div>
              <div className="blockcontent">
                <div>
                  Simple, powerful, butiful. Next-gen notes & docs,
                </div>
                <div>
                  <Link href="/" className="docln">
                    &quot;Learn more &quot;
                    <MoveRight color="#faa700" strokeWidth={1} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block_red_theme">
          <div className="blockSlide">
            <div className="blockHeader">
              <span className="wikiicon">
                <BookOpenText color="#ea4e43" />
              </span>
              <div className="blocktitle">
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-bold">
                  Docs
                </h3>
              </div>
              <div className="blockcontent">
                <div>
                  Simple, powerful, butiful. Next-gen notes & docs,
                </div>
                <div>
                  <Link href="/" className="wikiln">
                    &quot;Learn more &quot;
                    <MoveRight color="#ea4e43" strokeWidth={1} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block_yellow_theme">
          <div className="blockSlide">
            <div className="blockHeader">
              <span className="docicon">
                <FileText color="#faa700" />
              </span>
              <div className="blocktitle">
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-bold">
                  Docs
                </h3>
              </div>
              <div className="blockcontent">
                <div>
                  Simple, powerful, butiful. Next-gen notes & docs,
                </div>
                <div>
                  <Link href="/" className="docln">
                    &quot;Learn more &quot;
                    <MoveRight color="#faa700" strokeWidth={1} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block_yellow_theme">
          <div className="blockSlide">
            <div className="blockHeader">
              <span className="docicon">
                <FileText color="#faa700" />
              </span>
              <div className="blocktitle">
                <h3 className="text-2xl sm:text-2xl md:text-2xl font-bold">
                  Docs
                </h3>
              </div>
              <div className="blockcontent">
                <div>
                  Simple, powerful, butiful. Next-gen notes & docs,
                </div>
                <div>
                  <Link href="/" className="docln">
                    &quot;Learn more &quot;
                    <MoveRight color="#faa700" strokeWidth={1} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}