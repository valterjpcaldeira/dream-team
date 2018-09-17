import { Component, OnInit } from '@angular/core';
import { BusinnessService } from '../businness.service';
import { Businness } from '../businness';
import * as $ from 'jquery';

@Component({
  selector: 'app-quality-assurance',
  templateUrl: './quality-assurance.component.html',
  styleUrls: ['./quality-assurance.component.css']
})
export class QualityAssuranceComponent implements OnInit {

  businness = {}

  constructor(private businnessService: BusinnessService) { }

  ngOnInit() {
    this.getRandomBusinness();
  }

  getRandomBusinness(): void {
    this.businnessService.getRandomBusinness()
      .subscribe(businness => {
        this.businness = businness;
        $('#iframeee').attr("src", this.businness['business_site_url']);
        //PostTown
        var s_address = this.businness['business_site_address'];
        var o_postown = this.businness['business_original_post_town'];
        if(s_address.includes(o_postown)){
          var res = s_address.split(o_postown);
          $("#site_address").replaceWith( "<td id='site_address'>"+res[0]+"<span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span>"+res[1]+"</td>" );
          $("#post_town").replaceWith( "<td id='post_town'><span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span></td>" );
        }

        //Address
        var s_address = this.businness['business_site_address'];
        var o_postown = this.businness['business_original_address'];
        if(s_address.includes(o_postown)){
          var html = $("#site_address").html();
          var res = html.split(o_postown);
          $("#site_address").replaceWith("<td id='site_address'>"+ res[0]+" <span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span> "+res[1]+"</td>" );
          $("#address").replaceWith( " <td id='address'><span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span></td> " );
        }

        //CRN
        var s_crn = this.businness['business_site_crn']+"";
        var o_crn = this.businness['business_original_crn']+"";
        console.log(s_crn);
        if (typeof s_crn === 'string'){
          if(s_crn.includes(o_crn)){
            $("#site_crn").replaceWith( "<td id='site_crn'><span class='highlightclass' style='background-color: #99ffeb'>"+s_crn+"</span></td>" );
            $("#crn").replaceWith( "<td id='crn'><span class='highlightclass' style='background-color: #99ffeb'>"+o_crn+"</span></td>" );
            console.log(s_crn);
          }
        }

        //Name
        var s_name = this.businness['business_site_name'];
        var o_name = this.businness['companyNameClean'].replace("  ", " ");;
        if(s_name.includes(o_name)){
          var res = s_name.split(o_name);
          $("#site_name").replaceWith( "<td id='site_name'>"+res[0]+"<span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span>"+res[1]+"</td>" );
          $("#short_name").replaceWith( "<td id='short_name'><span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span></td>" );
        }
        //Name
        var s_summary = this.businness['business_site_summary'];
        if(s_summary.includes(o_name)){
          var res = s_summary.split(o_name);
          $("#summary").replaceWith( "<td id='site_name'>"+res[0]+"<span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span>"+res[1]+"</td>" );
          $("#short_name").replaceWith( "<td id='short_name'><span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span></td>" );
        }

        document.getElementById("loader-div").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      });
  }

  getRandomBusinnessNext(): void {
    this.businnessService.getRandomBusinness()
      .subscribe(businness => {
        this.businness = businness;
        console.log(businness['trust'])
        console.log(this.businness['trust'])
        this.businness['trust'] = businness['trust']
        $('#iframeee').attr("src", this.businness['business_site_url']);
        //PostTown
        var s_address = this.businness['business_site_address'];
        var o_postown = this.businness['business_original_post_town'];
        $("#site_address").replaceWith( "<td id='site_address'>"+s_address+"</td>" );
        $("#post_town").replaceWith( "<td id='post_town'>"+o_postown+"</td>" );
        $("#address").replaceWith( " <td id='address'>"+o_postown+"</td> " );
        if(s_address.includes(o_postown)){
          var res = s_address.split(o_postown);
          $("#site_address").replaceWith( "<td id='site_address'>"+res[0]+"<span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span>"+res[1]+"</td>" );
          $("#post_town").replaceWith( "<td id='post_town'><span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span></td>" );
        }

        //Address
        var s_address = this.businness['business_site_address'];
        var o_postown = this.businness['business_original_address'];
        if(s_address.includes(o_postown)){
          var html = $("#site_address").html();
          var res = html.split(o_postown);
          $("#site_address").replaceWith("<td id='site_address'>"+ res[0]+" <span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span> "+res[1]+"</td>" );
          $("#address").replaceWith( " <td id='address'><span class='highlightclass' style='background-color: #ccffcc'>"+o_postown+"</span></td> " );
        }

        //CRN
        var s_crn = this.businness['business_site_crn']+"";
        var o_crn = this.businness['business_original_crn']+"";
        $("#site_crn").replaceWith( "<td id='site_crn'>"+s_crn+"</td>" );
        $("#crn").replaceWith( "<td id='crn'>"+o_crn+"</td>" );
        if (typeof s_crn === 'string'){
          if(s_crn.includes(o_crn)){
            $("#site_crn").replaceWith( "<td id='site_crn'><span class='highlightclass' style='background-color: #99ffeb'>"+s_crn+"</span></td>" );
            $("#crn").replaceWith( "<td id='crn'><span class='highlightclass' style='background-color: #99ffeb'>"+o_crn+"</span></td>" );
          }
        }

        //Name
        var s_name = this.businness['business_site_name'];
        var o_name = this.businness['companyNameClean'].replace("  ", " ");
        $("#short_name").replaceWith( "<td id='short_name'>"+o_name+"</td>" );
        $("#site_name").replaceWith( "<td id='site_name'>"+s_name+"</td>" );
        if(s_name.includes(o_name)){
          var res = s_name.split(o_name);
          $("#site_name").replaceWith( "<td id='site_name'>"+res[0]+"<span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span>"+res[1]+"</td>" );
          $("#short_name").replaceWith( "<td id='short_name'><span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span></td>" );
        }
        //Name
        var s_summary = this.businness['business_site_summary'];
        $("#summary").replaceWith( "<td id='summary'>"+s_summary+"</td>" );
        if(s_summary.includes(o_name)){
          var res = s_summary.split(o_name);
          $("#summary").replaceWith( "<td id='site_name'>"+res[0]+"<span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span>"+res[1]+"</td>" );
          $("#short_name").replaceWith( "<td id='short_name'><span class='highlightclass' style='background-color: #ffe6b3'>"+o_name+"</span></td>" );
        }

        document.getElementById("loader-div").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      });
  }

  approve(evt): void {
    document.getElementById("loader-div").style.display = "block";
    document.getElementById("myDiv").style.display = "none";
    this.businnessService.approve(evt,true)
    this.getRandomBusinnessNext()
  }

  not_approve(evt): void {
    document.getElementById("loader-div").style.display = "block";
    document.getElementById("myDiv").style.display = "none";
    this.businnessService.approve(evt,false)
    this.getRandomBusinnessNext()
  }

}
