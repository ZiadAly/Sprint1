<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">

      <div class="col-xs-12">

      </div>

      <div class="col-md-6 col-xs-12">

      </div>

      <div class="col-md-6 col-xs-12">

      </div>

    </div>
<p>
  We are T17 Business Informatics. <br>
  We dont want to pursue a career in programming. <br>
  We want to pass the Software Engineering Course successfully. <br>
  We are enhancing our level in programming <br>
  We are a very connected Team <br>
  We love music <br>
  We will produce the best code out of the 3 tutorials <br>
  We will not break under pressure <br>
  We will survive <br>
  Again we love music <br>
</p>
<img src="static\img\liza.jpg" width = "120" height = "142">
<br> My name is Liza <br> I am 21 years old!<br>

<img src="static\img\sama.JPG" width = "120" height = "142">
<br> My name is Sama <br> I hate SE!<br>

<img src="static\img\dona.jpg" width = "120" height = "142">
<br> My name is Dona <br> I love chocolate and music !<br>

<img src="static\img\farah.jpg" width = "120" height = "142">
<br> My name is Farah <br> I love music!<br>

<img src="static\img\khaled.jpg" width = "120" height = "142">
<br> My name is Khaled <br> I love music!<br>

<img src="static\img\youssef.jpg" width = "120" height = "142">
<br> I am Youssef Ramy, a 20 years old BI student in the German University in Cairo <br> The day I was born, the nurses wept in despair, for they knew they would never see a child like me again.
(Hahaha joking)<br>

<img src="static\img\passant.jpg" width = "120" height = "142">
<br> My name is Passant <br> I love music!<br>

<img src="static\img\omarz.png" width = "120" height = "142">
<br> My name is Omar Zakaria <br> Im 21 years old!<br>

<img src="static\img\nour.JPG" width = "120" height = "142">
<br> My name is Nour <br> I love music and reading books!<br>

<img src="static\img\omar.png" width = "120" height = "142">
<br> My name is Omar <br> I love music!<br>

<img src="static\img\menna.jpg" width = "120" height = "142">
<br> I am a very optimistic person that hopes that this semester and especially this course would end peacfully and without losing my mind <br>

<img src="static\img\amr.jpeg" width = "120" height = "142">
<br> My name is Amr <br> I love music!<br>

<img src="static\img\samira.jpg" width = "120" height = "142">
<br>My name is Samira Mahmoud . I am 21 years old . I am studying business informatics at GUC . I will graduate after one year .
 <br>

</div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  export default {
    components: {
      StatsCard,
      ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {

        statsCards: [
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Revenue',
            value: '$1,345',
            footerText: 'Last day',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'danger',
            icon: 'ti-pulse',
            title: 'Errors',
            value: '23',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          }
        ],
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }

      }
    }
  }

</script>
<style>

</style>
