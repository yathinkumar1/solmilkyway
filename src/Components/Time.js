import React from "react";
import './Time.css';
import Phase1 from './Phase1';
import Phase2 from './Phase2';
import Phase3 from './Phase3';
import Phase4 from './Phase4';
import Image7 from '../Images/image7.jpeg'
import Image25 from '../Images/image25.jpeg'
import Image26 from '../Images/image26.png';
import Image27 from '../Images/image27.jpeg';
import {NavLink,Link} from 'react-router-dom';


function Time() {
  
  return (
    <div class="container-fluid">
<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-5">Canada </h4>

                <div class="hori-timeline" dir="ltr">
                    <ul class="list-inline events">
                        <li class="list-inline-item event-list">
                            <div class="px-4">
                                <div class="event-date bg-soft-primary text-primary">Phase 1</div>
                                <h5 class="font-size-16">Traditional Living in Canada</h5>
                                <img src={Image7} className='imag'></img>
                                <p class="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge friend</p>
                                <Link to="/phase1">
                                    <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                </Link>
                            </div>
                        </li>
                        <li class="list-inline-item event-list">
                            <div class="px-4">
                                <div class="event-date bg-soft-success text-success">Phase 2</div>
                                <h5 class="font-size-16">The Effects</h5>
                                <img src={Image25} className='imag'></img>
                                <p class="text-muted">Everyone realizes why a new common language one could refuse translators.</p>
                                <Link to="/phase2">
                                    <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                </Link>
                            </div>
                        </li>
                        <li class="list-inline-item event-list">
                            <div class="px-4">
                                <div class="event-date bg-soft-danger text-danger">Phase 3</div>
                                <h5 class="font-size-16">What if...</h5>
                                <img src={Image26} className='imag'></img>
                                <p class="text-muted">If several and languages coalesce the grammar of the resulting simple</p>
                                <Link to="/phase3">
                                    <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                </Link>
                            </div>
                        </li>
                        <li class="list-inline-item event-list">
                            <div class="px-4">
                                <div class="event-date bg-soft-warning text-warning">Phase 4</div>
                                <h5 class="font-size-16">Solutions</h5>
                                <img src={Image27} className='imag'></img>
                                <p class="text-muted">Languages only differ in their pronunciation and their most common.</p>
                                <Link to="/phase4">
                                    <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
  );
}

export default Time;
