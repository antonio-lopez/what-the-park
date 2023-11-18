import Container from "../Container";
import { Heading } from "../ui/Heading";
import ImageCardSecondary from "../ui/ImageCardSecondary";

const aboutImgs = [
  {
    title: "far off mountains",
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1700345494/what-the-park/lj-coates-8xmnLLiFcaw-unsplash_imnqtm.webp",
  },
  {
    title: "colored mountains",
    image:
      "https://res.cloudinary.com/dloisor1x/image/upload/v1700345494/what-the-park/venti-views-CySSihCt9os-unsplash_osqqhk.webp",
  },
];

const Info = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-10">
          <div>
            <Heading className="mb-3 justify-start">National Park</Heading>
            <p>
              A national park is a natural park in use for conservation
              purposes, created and protected by national governments. Often it
              is a reserve of natural, semi-natural, or developed land that a
              government declares or owns. Although individual countries
              designate their own national parks differently, there is a common
              idea: the conservation of &apos;wild nature&apos; for posterity
              and as a symbol of national pride. National parks are almost
              always open to visitors.
            </p>
          </div>
          <div>
            <ImageCardSecondary
              title={aboutImgs[0].title}
              image={aboutImgs[0].image}
            />
          </div>
          <div>
            <Heading className="mb-3 justify-start">About The Parks</Heading>
            <div className="flex flex-col space-y-3">
              <p>
                The United States has 63 national parks, which are
                congressionally designated protected areas operated by the
                National Park Service, an agency of the Department of the
                Interior. National parks are designated for their natural
                beauty, unique geological features, diverse ecosystems, and
                recreational opportunities, typically &quot;because of some
                outstanding scenic feature or natural phenomena.&quot; While
                legislatively all units of the National Park System are
                considered equal with the same mission, national parks are
                generally larger and more of a destination, and hunting and
                extractive activities are prohibited. National monuments, on the
                other hand, are also frequently protected for their historical
                or archaeological significance. Eight national parks (including
                six in Alaska) are paired with a national preserve, areas with
                different levels of protection that are administered together
                but considered separate units and whose areas are not included
                in the figures below. The 425 units of the National Park System
                can be broadly referred to as national parks, but most have
                other formal designations.
              </p>
              <p>
                A bill creating the first national park, Yellowstone, was signed
                into law by President Ulysses S. Grant in 1872, followed by
                Mackinac National Park in 1875 (decommissioned in 1895), and
                then Rock Creek Park (later merged into National Capital Parks),
                Sequoia and Yosemite in 1890. The Organic Act of 1916 created
                the National Park Service &quot;to conserve the scenery and the
                natural and historic objects and wildlife therein, and to
                provide for the enjoyment of the same in such manner and by such
                means as will leave them unimpaired for the enjoyment of future
                generations.&quot; Many current national parks had been
                previously protected as national monuments by the president
                under the Antiquities Act or as other designations created by
                Congress before being redesignated by Congress; the newest
                national park is New River Gorge, previously a National River,
                and the most recent entirely new park is National Park of
                American Samoa. A few former national parks are no longer
                designated as such, or have been disbanded. Fourteen national
                parks are designated UNESCO World Heritage Sites (WHS), and 21
                national parks are named UNESCO Biosphere Reserves (BR), with
                eight national parks in both programs.
              </p>
              <p>National park information courtesy of Wikipedia.</p>
            </div>
          </div>
          <div>
            <ImageCardSecondary
              title={aboutImgs[1].title}
              image={aboutImgs[1].image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Info;
