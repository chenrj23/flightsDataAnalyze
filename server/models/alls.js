/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alls', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    标识: {
      type: DataTypes.INTEGER(9),
      allowNull: true,
      defaultValue: "0"
    },
    年: {
      type: "YEAR(4)",
      allowNull: true,
      defaultValue: "0000"
    },
    月: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    周: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    DOW: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    日期: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    港口进出: {
      type: DataTypes.STRING,
      allowNull: true
    },
    港口1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    国内外: {
      type: DataTypes.STRING,
      allowNull: true
    },
    浦东或虹桥: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    区域12: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    航线类别: {
      type: DataTypes.STRING,
      allowNull: true
    },
    航线性质: {
      type: DataTypes.STRING,
      allowNull: true
    },
    往返航行: {
      type: DataTypes.STRING,
      allowNull: true
    },
    调整后旅客: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    航线: {
      type: DataTypes.STRING,
      allowNull: true
    },
    公司: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    航班: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    标注: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    机型: {
      type: DataTypes.STRING,
      allowNull: true
    },
    班次7: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    旅客量8: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    飞行时间: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    客座率: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    总收入11: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    小时收入: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    座收13: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    计划收入: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    完成比例: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    平均票价16: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    折扣: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    促销费: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    客公里数: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    座公里数20: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    燃油加价: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    标准收入: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    最大收入: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    布局24: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    区域1: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    区域2: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    航线代码: {
      type: DataTypes.STRING,
      allowNull: true
    },
    航班日期: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    微观: {
      type: DataTypes.STRING,
      allowNull: true
    },
    日期差: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'alls'
  });
};
