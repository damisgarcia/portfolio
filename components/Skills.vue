<template>
  <b-table class="tabel" :data="data" :columns="columns">
    <template slot-scope="props">
      <b-table-column field="skill">
        {{ props.row.skill }}
      </b-table-column>
      <b-table-column field="stars" numeric="">
        <skill-star :stars="props.row.stars" />
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
import SkillStar from './SkillStar'
export default {
  components: { SkillStar },
  data() {
    return {
      data: [
        {
          skill: 'CSS',
          stars: 5
        },
        {
          skill: 'HTML',
          stars: 4
        },
        {
          skill: 'Javascript',
          stars: 4
        }
      ],
      columns: [
        {
          field: 'skill',
          label: 'Skills'
        },
        {
          field: 'stars'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.b-table {
  background-color: transparent;
}
</style>
