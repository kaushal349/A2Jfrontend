import React from "react";
import "./index.css";

class InformationCenter extends React.Component {
  textBoxArticle = () => {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col shadow rounded p-5">
            <h4 className="h-4">Title of the Article</h4>
            <h6>by advocate</h6>
            <p className="pt-5 truncate text-justify">
              WebKit Browsers will clamp the number of lines in this paragraph
              to 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Article nor prepare chicken you him now. Shy merits say advice ten
              before lovers innate add. She cordially behaviour can attempted
              estimable. Trees delay fancy noise manor do as an small. Felicity
              now law securing breeding likewise extended and. Roused either who
              favour why ham. Supplied directly pleasant we ignorant ecstatic of
              jointure so if. These spoke house of we. Ask put yet excuse person
              see change. Do inhabiting no stimulated unpleasing of admiration
              he. Enquire explain another he in brandon enjoyed be service.
              Given mrs she first china. Table party no or trees an while it
              since. On oh celebrated at be announcing dissimilar insipidity.
              Ham marked engage oppose cousin ask add yet. Now seven world think
              timed while her. Spoil large oh he rooms on since an. Am up
              unwilling eagerness perceived incommode. Are not windows set
              luckily musical hundred can. Collecting if sympathize middletons
              be of of reasonably. Horrible so kindness at thoughts exercise no
              weddings subjects. The mrs gay removed towards journey chapter
              females offered not. Led distrusts otherwise who may newspaper
              but. Last he dull am none he mile hold as. For norland produce age
              wishing. To figure on it spring season up. Her provision acuteness
              had excellent two why intention. As called mr needed praise at.
              Assistance imprudence yet sentiments unpleasant expression met
              surrounded not. Be at talked ye though secure nearer. No comfort
              do written conduct at prevent manners on. Celebrated contrasted
              discretion him sympathize her collecting occasional. Do answered
              bachelor occasion in of offended no concerns. Supply worthy warmth
              branch of no ye. Voice tried known to as my to. Though wished
              merits or be. Alone visit use these smart rooms ham. No waiting in
              on enjoyed placing it inquiry. Departure so attention pronounce
              satisfied daughters am. But shy tedious pressed studied opinion
              entered windows off. Advantage dependent suspicion convinced
              provision him yet. Timed balls match at by rooms we. Fat not boy
              neat left had with past here call. Court nay merit few nor party
              learn. Why our year her eyes know even how. Mr immediate remaining
              conveying allowance do or. Article nor prepare chicken you him
              now. Shy merits say advice ten before lovers innate add. She
              cordially behaviour can attempted estimable. Trees delay fancy
              noise manor do as an small. Felicity now law securing breeding
              likewise extended and. Roused either who favour why ham. Supplied
              directly pleasant we ignorant ecstatic of jointure so if. These
              spoke house of we. Ask put yet excuse person see change. Do
              inhabiting no stimulated unpleasing of admiration he. Enquire
              explain another he in brandon enjoyed be service. Given mrs she
              first china. Table party no or trees an while it since. On oh
              celebrated at be announcing dissimilar insipidity. Ham"
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  };

  FAQ = () => {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col shadow promotion-div rounded p-4">
            <h5 className="text-center">Related Questions</h5>
            <p className="font-weight-bold pt-4">Title of the Question</p>
            <p>some content as the answer of the Question</p>

            <p className="font-weight-bold pt-4">Title of the Question</p>
            <p>some content as the answer of the Question</p>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="information-center">
          <div className="row outer-box">
            <div className="col">
              <div className="d-flex justify-content-center">
                <img
                  className="img-1 rounded"
                  src={require("../../Images/law2.png")}
                  alt=""
                />
              </div>
              <div className="div-1 center-horizontally">
                {this.textBoxArticle()}
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center">
                <img
                  className="img-2 rounded"
                  src={require("../../Images/law2.png")}
                  alt=""
                />
              </div>
              <div className="div-1 center-horizontally">{this.FAQ()}</div>
              <div className="d-flex justify-content-center">
                <img
                  className="img-2 rounded"
                  src={require("../../Images/law2.png")}
                  alt=""
                />
              </div>
              <div className="div-1 center-horizontally">
                {this.textBoxArticle()}
              </div>
            </div>
          </div>

          <div className="row outer-box">
            <h3 className="heading-1">Top Articles of the week</h3>
            <div className="row">
              <div className="col-4">
                <div className="m-3">{this.textBoxArticle()}</div>
              </div>
              <div className="col-4">
                <div className="m-3">{this.textBoxArticle()}</div>
              </div>
              <div className="col-4">
                <div className="m-3">{this.textBoxArticle()}</div>
              </div>
              <div className="col-4">
                <div className="m-3">{this.textBoxArticle()}</div>
              </div>
              <div className="col-4">
                <div className="m-3">{this.textBoxArticle()}</div>
              </div>
              <div className="col-4">
                <div className="m-3">{this.textBoxArticle()}</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InformationCenter;
